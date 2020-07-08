import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BinLocationAttributeParams
 */
export interface BinLocationAttributeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Attribute.
     * @nullable
     */
    attribute?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationAttributeParams.build]] instead.
 */
export declare function createBinLocationAttributeParams(json: any): BinLocationAttributeParams;
/**
 * BinLocationAttributeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationAttributeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BinLocationAttributeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationAttributeParams.attribute]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationAttributeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BinLocationAttributeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationAttributeParams;
}
//# sourceMappingURL=BinLocationAttributeParams.d.ts.map