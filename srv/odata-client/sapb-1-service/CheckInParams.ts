/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createCheckInParams(json: any): CheckInParams {
  return CheckInParams.build(json);
}

/**
 * CheckInParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckInParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CheckInParams> {
  /**
   * Representation of the [[CheckInParams.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckInParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CheckInParams.time]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('Time', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[CheckInParams.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[CheckInParams.latitude]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  latitude: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Latitude', this, 'Edm.String');
  /**
   * Representation of the [[CheckInParams.longitude]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  longitude: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Longitude', this, 'Edm.String');
  /**
   * Representation of the [[CheckInParams.handledBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  handledBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HandledBy', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckInParams.handledByEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  handledByEmployee: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HandledByEmployee', this, 'Edm.Int32');

  /**
   * Creates an instance of CheckInParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CheckInParams);
  }
}

export namespace CheckInParams {
  /**
   * Metadata information on all properties of the `CheckInParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CheckInParams>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Time',
    name: 'time',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'Location',
    name: 'location',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Latitude',
    name: 'latitude',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Longitude',
    name: 'longitude',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'HandledBy',
    name: 'handledBy',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HandledByEmployee',
    name: 'handledByEmployee',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CheckInParams {
    return deserializeComplexTypeV4(json, CheckInParams);
  }
}
