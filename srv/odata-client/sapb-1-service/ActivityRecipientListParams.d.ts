import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityRecipientListParams
 */
export interface ActivityRecipientListParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipientListParams.build]] instead.
 */
export declare function createActivityRecipientListParams(json: any): ActivityRecipientListParams;
/**
 * ActivityRecipientListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityRecipientListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityRecipientListParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipientListParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ActivityRecipientListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityRecipientListParams;
}
//# sourceMappingURL=ActivityRecipientListParams.d.ts.map