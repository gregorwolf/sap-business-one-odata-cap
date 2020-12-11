/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createTechnicianSchedulingsParams(json: any): TechnicianSchedulingsParams {
  return TechnicianSchedulingsParams.build(json);
}

/**
 * TechnicianSchedulingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSchedulingsParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSchedulingsParams> {
  /**
   * Representation of the [[TechnicianSchedulingsParams.technician]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Technician', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSchedulingsParams.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TechnicianSchedulingsParams.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of TechnicianSchedulingsParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TechnicianSchedulingsParams);
  }
}

export namespace TechnicianSchedulingsParams {
  /**
   * Metadata information on all properties of the `TechnicianSchedulingsParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSchedulingsParams>[] = [{
    originalName: 'Technician',
    name: 'technician',
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
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TechnicianSchedulingsParams {
    return deserializeComplexTypeV4(json, TechnicianSchedulingsParams);
  }
}
