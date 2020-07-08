import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * NfTaxCategoryParams
 */
export interface NfTaxCategoryParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NfTaxCategoryParams.build]] instead.
 */
export declare function createNfTaxCategoryParams(json: any): NfTaxCategoryParams;
/**
 * NfTaxCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NfTaxCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[NfTaxCategoryParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NfTaxCategoryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace NfTaxCategoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): NfTaxCategoryParams;
}
//# sourceMappingURL=NfTaxCategoryParams.d.ts.map