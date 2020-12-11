import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * CheckInParams
 */
export interface CheckInParams {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Time.
     * @nullable
     */
    time?: Time;
    /**
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Latitude.
     * @nullable
     */
    latitude?: string;
    /**
     * Longitude.
     * @nullable
     */
    longitude?: string;
    /**
     * Handled By.
     * @nullable
     */
    handledBy?: number;
    /**
     * Handled By Employee.
     * @nullable
     */
    handledByEmployee?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CheckInParams.build]] instead.
 */
export declare function createCheckInParams(json: any): CheckInParams;
/**
 * CheckInParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CheckInParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CheckInParams> {
    /**
     * Representation of the [[CheckInParams.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.time]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    time: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.latitude]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    latitude: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.longitude]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    longitude: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    handledBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CheckInParams.handledByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    handledByEmployee: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CheckInParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CheckInParams {
    /**
     * Metadata information on all properties of the `CheckInParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CheckInParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CheckInParams;
}
//# sourceMappingURL=CheckInParams.d.ts.map