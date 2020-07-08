import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class TaxWebSiteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TaxWebSiteParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxWebSiteParams;
}
//# sourceMappingURL=TaxWebSiteParams.d.ts.map