"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const servico_entity_1 = require("./servico.entity");
let PrestadorEntity = class PrestadorEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PrestadorEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 11 }),
    __metadata("design:type", String)
], PrestadorEntity.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 50 }),
    __metadata("design:type", String)
], PrestadorEntity.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 255 }),
    __metadata("design:type", String)
], PrestadorEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 30 }),
    __metadata("design:type", String)
], PrestadorEntity.prototype, "telefone", void 0);
__decorate([
    typeorm_1.ManyToOne(type => servico_entity_1.ServicoEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'servico_id' }),
    __metadata("design:type", servico_entity_1.ServicoEntity)
], PrestadorEntity.prototype, "servico", void 0);
PrestadorEntity = __decorate([
    typeorm_1.Entity({ name: 'prestador' })
], PrestadorEntity);
exports.PrestadorEntity = PrestadorEntity;
//# sourceMappingURL=prestador.entity.js.map