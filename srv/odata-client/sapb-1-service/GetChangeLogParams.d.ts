import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * GetChangeLogParams
 */
export interface GetChangeLogParams {
    /**
     * Primary Key.
     * @nullable
     */
    primaryKey?: string;
    /**
     * Udo Object Code.
     * @nullable
     */
    udoObjectCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
export declare function createGetChangeLogParams(json: any): GetChangeLogParams;
/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GetChangeLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udoObjectCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace GetChangeLogParams {
    function build(json: {
        [keys: string]: FieldType;
    }): GetChangeLogParams;
}
//# sourceMappingURL=GetChangeLogParams.d.ts.map