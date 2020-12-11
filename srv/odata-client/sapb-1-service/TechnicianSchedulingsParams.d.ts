import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TechnicianSchedulingsParams
 */
export interface TechnicianSchedulingsParams {
    /**
     * Technician.
     * @nullable
     */
    technician?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulingsParams.build]] instead.
 */
export declare function createTechnicianSchedulingsParams(json: any): TechnicianSchedulingsParams;
/**
 * TechnicianSchedulingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSchedulingsParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSchedulingsParams> {
    /**
     * Representation of the [[TechnicianSchedulingsParams.technician]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    technician: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulingsParams.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulingsParams.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of TechnicianSchedulingsParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TechnicianSchedulingsParams {
    /**
     * Metadata information on all properties of the `TechnicianSchedulingsParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TechnicianSchedulingsParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSchedulingsParams;
}
//# sourceMappingURL=TechnicianSchedulingsParams.d.ts.map