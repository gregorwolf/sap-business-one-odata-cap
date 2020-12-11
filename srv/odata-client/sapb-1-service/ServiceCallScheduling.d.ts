import { Moment } from 'moment';
import { BoDurations } from './BoDurations';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAddressType } from './BoAddressType';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * ServiceCallScheduling
 */
export interface ServiceCallScheduling {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Technician.
     * @nullable
     */
    technician?: number;
    /**
     * Handled By.
     * @nullable
     */
    handledBy?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * End Time.
     * @nullable
     */
    endTime?: Time;
    /**
     * Duration.
     * @nullable
     */
    duration?: number;
    /**
     * Actual Duration.
     * @nullable
     */
    actualDuration?: number;
    /**
     * Duration Type.
     * @nullable
     */
    durationType?: BoDurations;
    /**
     * Reminder.
     * @nullable
     */
    reminder?: BoYesNoEnum;
    /**
     * Reminder Period.
     * @nullable
     */
    reminderPeriod?: number;
    /**
     * Reminder Type.
     * @nullable
     */
    reminderType?: BoDurations;
    /**
     * Reminder Sent.
     * @nullable
     */
    reminderSent?: BoYesNoEnum;
    /**
     * Reminder Date.
     * @nullable
     */
    reminderDate?: Moment;
    /**
     * Reminder Time.
     * @nullable
     */
    reminderTime?: Time;
    /**
     * Display In Calendar.
     * @nullable
     */
    displayInCalendar?: BoYesNoEnum;
    /**
     * Is Unscheduled.
     * @nullable
     */
    isUnscheduled?: BoYesNoEnum;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Address Name.
     * @nullable
     */
    addressName?: string;
    /**
     * Address Text.
     * @nullable
     */
    addressText?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Room.
     * @nullable
     */
    room?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Address 2.
     * @nullable
     */
    address2?: string;
    /**
     * Address 3.
     * @nullable
     */
    address3?: string;
    /**
     * Address Type.
     * @nullable
     */
    addressType?: string;
    /**
     * Street No.
     * @nullable
     */
    streetNo?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Tax Office.
     * @nullable
     */
    taxOffice?: string;
    /**
     * Global Loc Num.
     * @nullable
     */
    globalLocNum?: string;
    /**
     * Is Closed.
     * @nullable
     */
    isClosed?: BoYesNoEnum;
    /**
     * Remark.
     * @nullable
     */
    remark?: string;
    /**
     * Address Type Bs.
     * @nullable
     */
    addressTypeBs?: BoAddressType;
    /**
     * Signature Name.
     * @nullable
     */
    signatureName?: string;
    /**
     * Sales Orders.
     * @nullable
     */
    salesOrders?: string;
    /**
     * Check In Date.
     * @nullable
     */
    checkInDate?: Moment;
    /**
     * Check In Time.
     * @nullable
     */
    checkInTime?: Time;
    /**
     * Check In Location.
     * @nullable
     */
    checkInLocation?: string;
    /**
     * Check In Latitude.
     * @nullable
     */
    checkInLatitude?: string;
    /**
     * Check In Longitude.
     * @nullable
     */
    checkInLongitude?: string;
    /**
     * Check Out Date.
     * @nullable
     */
    checkOutDate?: Moment;
    /**
     * Check Out Time.
     * @nullable
     */
    checkOutTime?: Time;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallScheduling.build]] instead.
 */
export declare function createServiceCallScheduling(json: any): ServiceCallScheduling;
/**
 * ServiceCallSchedulingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallSchedulingField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallScheduling> {
    /**
     * Representation of the [[ServiceCallScheduling.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.technician]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    technician: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    handledBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.startTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.endTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.duration]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    duration: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.actualDuration]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualDuration: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.durationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    durationType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminder: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminderPeriod: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminderType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminderType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminderSent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminderSent: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminderDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminderDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.reminderTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reminderTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.displayInCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayInCalendar: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.isUnscheduled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isUnscheduled: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.addressName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.addressText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.street]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    street: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.room]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    room: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.address2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.address3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.addressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.block]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    block: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.taxOffice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxOffice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.globalLocNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    globalLocNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.isClosed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isClosed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.remark]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remark: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.addressTypeBs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressTypeBs: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.signatureName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    signatureName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.salesOrders]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesOrders: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkInDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkInDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkInTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkInTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkInLocation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkInLocation: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkInLatitude]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkInLatitude: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkInLongitude]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkInLongitude: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkOutDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkOutDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallScheduling.checkOutTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkOutTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallSchedulingField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallScheduling {
    /**
     * Metadata information on all properties of the `ServiceCallScheduling` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallScheduling>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallScheduling;
}
//# sourceMappingURL=ServiceCallScheduling.d.ts.map