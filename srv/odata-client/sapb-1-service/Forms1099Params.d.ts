import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Forms1099Params
 */
export interface Forms1099Params {
    /**
     * Form Code.
     * @nullable
     */
    formCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[Forms1099Params.build]] instead.
 */
export declare function createForms1099Params(json: any): Forms1099Params;
/**
 * Forms1099ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Forms1099ParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Forms1099Params.formCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace Forms1099Params {
    function build(json: {
        [keys: string]: FieldType;
    }): Forms1099Params;
}
//# sourceMappingURL=Forms1099Params.d.ts.map