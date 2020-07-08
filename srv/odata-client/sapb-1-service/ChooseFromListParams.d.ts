import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChooseFromListParams
 */
export interface ChooseFromListParams {
    /**
     * Object Name.
     * @nullable
     */
    objectName?: string;
    /**
     * Field Index.
     * @nullable
     */
    fieldIndex?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListParams.build]] instead.
 */
export declare function createChooseFromListParams(json: any): ChooseFromListParams;
/**
 * ChooseFromListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChooseFromListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChooseFromListParams.objectName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListParams.fieldIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldIndex: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ChooseFromListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ChooseFromListParams;
}
//# sourceMappingURL=ChooseFromListParams.d.ts.map