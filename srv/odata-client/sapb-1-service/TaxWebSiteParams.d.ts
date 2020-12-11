import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxWebSiteParams
 */
export interface TaxWebSiteParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Web Site Name.
     * @nullable
     */
    webSiteName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxWebSiteParams.build]] instead.
 */
export declare function createTaxWebSiteParams(json: any): TaxWebSiteParams;
/**
 * TaxWebSiteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxWebSiteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxWebSiteParams> {
    /**
     * Representation of the [[TaxWebSiteParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxWebSiteParams.webSiteName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    webSiteName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TaxWebSiteParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxWebSiteParams {
    /**
     * Metadata information on all properties of the `TaxWebSiteParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxWebSiteParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxWebSiteParams;
}
//# sourceMappingURL=TaxWebSiteParams.d.ts.map