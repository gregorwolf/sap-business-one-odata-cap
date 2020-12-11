import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CommissionGroupParams
 */
export interface CommissionGroupParams {
    /**
     * Commission Group Code.
     * @nullable
     */
    commissionGroupCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CommissionGroupParams.build]] instead.
 */
export declare function createCommissionGroupParams(json: any): CommissionGroupParams;
/**
 * CommissionGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CommissionGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CommissionGroupParams> {
    /**
     * Representation of the [[CommissionGroupParams.commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commissionGroupCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CommissionGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CommissionGroupParams {
    /**
     * Metadata information on all properties of the `CommissionGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CommissionGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CommissionGroupParams;
}
//# sourceMappingURL=CommissionGroupParams.d.ts.map