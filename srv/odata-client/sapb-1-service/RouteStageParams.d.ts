import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
/**
 * RouteStageParams
 */
export interface RouteStageParams {
    /**
     * Internal Number.
     * @nullable
     */
    internalNumber?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Generation Time.
     * @nullable
     */
    generationTime?: Time;
    /**
     * Date Of Update.
     * @nullable
     */
    dateOfUpdate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[RouteStageParams.build]] instead.
 */
export declare function createRouteStageParams(json: any): RouteStageParams;
/**
 * RouteStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RouteStageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RouteStageParams.internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RouteStageParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RouteStageParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RouteStageParams.creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[RouteStageParams.generationTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    generationTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[RouteStageParams.dateOfUpdate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfUpdate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace RouteStageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RouteStageParams;
}
//# sourceMappingURL=RouteStageParams.d.ts.map