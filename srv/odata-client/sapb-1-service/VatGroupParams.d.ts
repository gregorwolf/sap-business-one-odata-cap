import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * VatGroupParams
 */
export interface VatGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[VatGroupParams.build]] instead.
 */
export declare function createVatGroupParams(json: any): VatGroupParams;
/**
 * VatGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VatGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[VatGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace VatGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): VatGroupParams;
}
//# sourceMappingURL=VatGroupParams.d.ts.map