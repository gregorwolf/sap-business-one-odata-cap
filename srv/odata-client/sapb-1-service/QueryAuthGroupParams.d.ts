import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * QueryAuthGroupParams
 */
export interface QueryAuthGroupParams {
    /**
     * Auth Group Id.
     * @nullable
     */
    authGroupId?: number;
    /**
     * Auth Group Code.
     * @nullable
     */
    authGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[QueryAuthGroupParams.build]] instead.
 */
export declare function createQueryAuthGroupParams(json: any): QueryAuthGroupParams;
/**
 * QueryAuthGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class QueryAuthGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authGroupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authGroupCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace QueryAuthGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): QueryAuthGroupParams;
}
//# sourceMappingURL=QueryAuthGroupParams.d.ts.map