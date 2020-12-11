/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createTechnicianSchedulings(json: any): TechnicianSchedulings {
  return TechnicianSchedulings.build(json);
}

/**
 * TechnicianSchedulingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSchedulingsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSchedulings> {
  /**
   * Representation of the [[TechnicianSchedulings.serviceCallId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCallId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceCallID', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSchedulings.schedulingLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  schedulingLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SchedulingLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSchedulings.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TechnicianSchedulings.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TechnicianSchedulings.isClosed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isClosed: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsClosed', this);

  /**
   * Creates an instance of TechnicianSchedulingsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TechnicianSchedulings);
  }
}

export namespace TechnicianSchedulings {
  /**
   * Metadata information on all properties of the `TechnicianSchedulings` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSchedulings>[] = [{
    originalName: 'ServiceCallID',
    name: 'serviceCallId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SchedulingLineNum',
    name: 'schedulingLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EndDate',
    name: 'endDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'IsClosed',
    name: 'isClosed',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TechnicianSchedulings {
    return deserializeComplexTypeV4(json, TechnicianSchedulings);
  }
}
