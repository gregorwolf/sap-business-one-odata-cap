import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
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
export declare class CheckInParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CheckInParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CheckInParams;
}
//# sourceMappingURL=CheckInParams.d.ts.map