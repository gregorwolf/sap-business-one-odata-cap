import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProfitCenterParams
 */
export interface ProfitCenterParams {
    /**
     * Center Code.
     * @nullable
     */
    centerCode?: string;
    /**
     * Center Name.
     * @nullable
     */
    centerName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
export declare function createProfitCenterParams(json: any): ProfitCenterParams;
/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProfitCenterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProfitCenterParams> {
    /**
     * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ProfitCenterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProfitCenterParams {
    /**
     * Metadata information on all properties of the `ProfitCenterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProfitCenterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProfitCenterParams;
}
//# sourceMappingURL=ProfitCenterParams.d.ts.map