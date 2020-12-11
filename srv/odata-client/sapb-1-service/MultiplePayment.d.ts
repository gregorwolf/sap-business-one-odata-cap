import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Is Debit.
     * @nullable
     */
    isDebit?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[MultiplePayment.build]] instead.
 */
export declare function createMultiplePayment(json: any): MultiplePayment;
/**
 * MultiplePaymentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MultiplePaymentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MultiplePayment> {
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
    /**
     * Representation of the [[MultiplePayment.isDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isDebit: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of MultiplePaymentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MultiplePayment {
    /**
     * Metadata information on all properties of the `MultiplePayment` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MultiplePayment>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MultiplePayment;
}
//# sourceMappingURL=MultiplePayment.d.ts.map