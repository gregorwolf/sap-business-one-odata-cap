import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CountryParams
 */
export interface CountryParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CountryParams.build]] instead.
 */
export declare function createCountryParams(json: any): CountryParams;
/**
 * CountryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CountryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CountryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CountryParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CountryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CountryParams;
}
//# sourceMappingURL=CountryParams.d.ts.map