import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityInstanceParams
 */
export interface ActivityInstanceParams {
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
    /**
     * Instance Date.
     * @nullable
     */
    instanceDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
export declare function createActivityInstanceParams(json: any): ActivityInstanceParams;
/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityInstanceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instanceDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace ActivityInstanceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityInstanceParams;
}
//# sourceMappingURL=ActivityInstanceParams.d.ts.map