/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CheckInParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace CheckInParams {
  export function build(json: { [keys: string]: FieldType }): CheckInParams {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      Time: (time: Time) => ({ time: edmToTs(time, 'Edm.TimeOfDay') }),
      Location: (location: string) => ({ location: edmToTs(location, 'Edm.String') }),
      Latitude: (latitude: string) => ({ latitude: edmToTs(latitude, 'Edm.String') }),
      Longitude: (longitude: string) => ({ longitude: edmToTs(longitude, 'Edm.String') }),
      HandledBy: (handledBy: number) => ({ handledBy: edmToTs(handledBy, 'Edm.Int32') }),
      HandledByEmployee: (handledByEmployee: number) => ({ handledByEmployee: edmToTs(handledByEmployee, 'Edm.Int32') })
    });
  }
}
