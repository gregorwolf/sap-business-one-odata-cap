import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WtdCodeParams
 */
export interface WtdCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * W Tax Name.
     * @nullable
     */
    wTaxName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WtdCodeParams.build]] instead.
 */
export declare function createWtdCodeParams(json: any): WtdCodeParams;
/**
 * WtdCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdCodeParams> {
    /**
     * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WtdCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WtdCodeParams {
    /**
     * Metadata information on all properties of the `WtdCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WtdCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WtdCodeParams;
}
//# sourceMappingURL=WtdCodeParams.d.ts.map