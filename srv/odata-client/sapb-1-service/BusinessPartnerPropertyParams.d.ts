import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BusinessPartnerPropertyParams
 */
export interface BusinessPartnerPropertyParams {
    /**
     * Property Code.
     * @nullable
     */
    propertyCode?: number;
    /**
     * Property Name.
     * @nullable
     */
    propertyName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
export declare function createBusinessPartnerPropertyParams(json: any): BusinessPartnerPropertyParams;
/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerPropertyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    propertyCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    propertyName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BusinessPartnerPropertyParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerPropertyParams;
}
//# sourceMappingURL=BusinessPartnerPropertyParams.d.ts.map