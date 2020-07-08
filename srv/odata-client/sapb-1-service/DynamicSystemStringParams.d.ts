import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DynamicSystemStringParams
 */
export interface DynamicSystemStringParams {
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
    /**
     * Item Id.
     * @nullable
     */
    itemId?: string;
    /**
     * Column Id.
     * @nullable
     */
    columnId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DynamicSystemStringParams.build]] instead.
 */
export declare function createDynamicSystemStringParams(json: any): DynamicSystemStringParams;
/**
 * DynamicSystemStringParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DynamicSystemStringParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DynamicSystemStringParams.formId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicSystemStringParams.itemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicSystemStringParams.columnId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DynamicSystemStringParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DynamicSystemStringParams;
}
//# sourceMappingURL=DynamicSystemStringParams.d.ts.map