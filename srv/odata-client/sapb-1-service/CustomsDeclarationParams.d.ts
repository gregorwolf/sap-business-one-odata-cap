import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CustomsDeclarationParams
 */
export interface CustomsDeclarationParams {
    /**
     * Ccd Num.
     * @nullable
     */
    ccdNum?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CustomsDeclarationParams.build]] instead.
 */
export declare function createCustomsDeclarationParams(json: any): CustomsDeclarationParams;
/**
 * CustomsDeclarationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CustomsDeclarationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CustomsDeclarationParams.ccdNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ccdNum: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CustomsDeclarationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CustomsDeclarationParams;
}
//# sourceMappingURL=CustomsDeclarationParams.d.ts.map