import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
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
export declare class RouteStageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RouteStageParams> {
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
    /**
     * Creates an instance of RouteStageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RouteStageParams {
    /**
     * Metadata information on all properties of the `RouteStageParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RouteStageParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RouteStageParams;
}
//# sourceMappingURL=RouteStageParams.d.ts.map