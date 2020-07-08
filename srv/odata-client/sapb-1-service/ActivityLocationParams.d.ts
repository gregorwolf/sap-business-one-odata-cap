import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityLocationParams
 */
export interface ActivityLocationParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityLocationParams.build]] instead.
 */
export declare function createActivityLocationParams(json: any): ActivityLocationParams;
/**
 * ActivityLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityLocationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityLocationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ActivityLocationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityLocationParams;
}
//# sourceMappingURL=ActivityLocationParams.d.ts.map