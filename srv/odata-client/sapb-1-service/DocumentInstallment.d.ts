import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentInstallment
 */
export interface DocumentInstallment {
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Percentage.
     * @nullable
     */
    percentage?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Last Dunning Date.
     * @nullable
     */
    lastDunningDate?: Moment;
    /**
     * Dunning Level.
     * @nullable
     */
    dunningLevel?: number;
    /**
     * Total Fc.
     * @nullable
     */
    totalFc?: number;
    /**
     * Installment Id.
     * @nullable
     */
    installmentId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentInstallment.build]] instead.
 */
export declare function createDocumentInstallment(json: any): DocumentInstallment;
/**
 * DocumentInstallmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentInstallmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentInstallment.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.percentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.lastDunningDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastDunningDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dunningLevel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.installmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    installmentId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DocumentInstallment {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentInstallment;
}
//# sourceMappingURL=DocumentInstallment.d.ts.map