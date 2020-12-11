import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BlanketAgreementParams
 */
export interface BlanketAgreementParams {
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementParams.build]] instead.
 */
export declare function createBlanketAgreementParams(json: any): BlanketAgreementParams;
/**
 * BlanketAgreementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementParams> {
    /**
     * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BlanketAgreementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BlanketAgreementParams {
    /**
     * Metadata information on all properties of the `BlanketAgreementParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BlanketAgreementParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementParams;
}
//# sourceMappingURL=BlanketAgreementParams.d.ts.map