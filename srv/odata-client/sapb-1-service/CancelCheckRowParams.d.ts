import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CancelCheckRowParams
 */
export interface CancelCheckRowParams {
    /**
     * Deposit Id.
     * @nullable
     */
    depositId?: number;
    /**
     * Check Id.
     * @nullable
     */
    checkId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CancelCheckRowParams.build]] instead.
 */
export declare function createCancelCheckRowParams(json: any): CancelCheckRowParams;
/**
 * CancelCheckRowParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CancelCheckRowParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CancelCheckRowParams> {
    /**
     * Representation of the [[CancelCheckRowParams.depositId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depositId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CancelCheckRowParams.checkId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CancelCheckRowParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CancelCheckRowParams {
    /**
     * Metadata information on all properties of the `CancelCheckRowParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CancelCheckRowParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CancelCheckRowParams;
}
//# sourceMappingURL=CancelCheckRowParams.d.ts.map