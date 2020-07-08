import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MaterialGroupParams
 */
export interface MaterialGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Material Group Code.
     * @nullable
     */
    materialGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialGroupParams.build]] instead.
 */
export declare function createMaterialGroupParams(json: any): MaterialGroupParams;
/**
 * MaterialGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MaterialGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialGroupParams.materialGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    materialGroupCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace MaterialGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialGroupParams;
}
//# sourceMappingURL=MaterialGroupParams.d.ts.map