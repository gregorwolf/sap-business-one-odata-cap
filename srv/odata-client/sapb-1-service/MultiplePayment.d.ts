import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MultiplePayment
 */
export interface MultiplePayment {
    /**
     * Bank Statment Line Id.
     * @nullable
     */
    bankStatmentLineId?: number;
    /**
     * List Line Id.
     * @nullable
     */
    listLineId?: number;
    /**
     * Document Identifier.
     * @nullable
     */
    documentIdentifier?: string;
    /**
     * Amount Lc.
     * @nullable
     */
    amountLc?: number;
    /**
     * Amount Fc.
     * @nullable
     */
    amountFc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[MultiplePayment.build]] instead.
 */
export declare function createMultiplePayment(json: any): MultiplePayment;
/**
 * MultiplePaymentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MultiplePaymentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MultiplePayment.bankStatmentLineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankStatmentLineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MultiplePayment.listLineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    listLineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MultiplePayment.documentIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentIdentifier: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MultiplePayment.amountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MultiplePayment.amountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountFc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace MultiplePayment {
    function build(json: {
        [keys: string]: FieldType;
    }): MultiplePayment;
}
//# sourceMappingURL=MultiplePayment.d.ts.map