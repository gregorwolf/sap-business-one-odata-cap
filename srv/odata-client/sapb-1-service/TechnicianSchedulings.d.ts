import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TechnicianSchedulings
 */
export interface TechnicianSchedulings {
    /**
     * Service Call Id.
     * @nullable
     */
    serviceCallId?: number;
    /**
     * Scheduling Line Num.
     * @nullable
     */
    schedulingLineNum?: number;
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
    /**
     * Is Closed.
     * @nullable
     */
    isClosed?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulings.build]] instead.
 */
export declare function createTechnicianSchedulings(json: any): TechnicianSchedulings;
/**
 * TechnicianSchedulingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSchedulingsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSchedulings> {
    /**
     * Representation of the [[TechnicianSchedulings.serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCallId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.schedulingLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    schedulingLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.isClosed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isClosed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TechnicianSchedulingsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TechnicianSchedulings {
    /**
     * Metadata information on all properties of the `TechnicianSchedulings` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TechnicianSchedulings>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSchedulings;
}
//# sourceMappingURL=TechnicianSchedulings.d.ts.map