import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityInstancesListParams
 */
export interface ActivityInstancesListParams {
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Instance Count.
     * @nullable
     */
    instanceCount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
export declare function createActivityInstancesListParams(json: any): ActivityInstancesListParams;
/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityInstancesListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instanceCount: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ActivityInstancesListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityInstancesListParams;
}
//# sourceMappingURL=ActivityInstancesListParams.d.ts.map