import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FormattedSearchParams
 */
export interface FormattedSearchParams {
    /**
     * Index.
     * @nullable
     */
    index?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FormattedSearchParams.build]] instead.
 */
export declare function createFormattedSearchParams(json: any): FormattedSearchParams;
/**
 * FormattedSearchParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FormattedSearchParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FormattedSearchParams.index]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    index: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace FormattedSearchParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FormattedSearchParams;
}
//# sourceMappingURL=FormattedSearchParams.d.ts.map