/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TechnicianSchedulingsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace TechnicianSchedulings {
  export function build(json: { [keys: string]: FieldType }): TechnicianSchedulings {
    return createComplexType(json, {
      ServiceCallID: (serviceCallId: number) => ({ serviceCallId: edmToTs(serviceCallId, 'Edm.Int32') }),
      SchedulingLineNum: (schedulingLineNum: number) => ({ schedulingLineNum: edmToTs(schedulingLineNum, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      EndDate: (endDate: Moment) => ({ endDate: edmToTs(endDate, 'Edm.DateTimeOffset') })
    });
  }
}
