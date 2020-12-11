/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ElectronicSeries
 */
export interface ElectronicSeries {
  /**
   * Electronic Series.
   * @nullable
   */
  electronicSeries?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Initial Number.
   * @nullable
   */
  initialNumber?: string;
  /**
   * Next Number.
   * @nullable
   */
  nextNumber?: string;
  /**
   * Last Number.
   * @nullable
   */
  lastNumber?: string;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: string;
  /**
   * Approval Year.
   * @nullable
   */
  approvalYear?: number;
  /**
   * Approval Number.
   * @nullable
   */
  approvalNumber?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeries.build]] instead.
 */
export function createElectronicSeries(json: any): ElectronicSeries {
  return ElectronicSeries.build(json);
}

/**
 * ElectronicSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicSeriesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ElectronicSeries> {
  /**
   * Representation of the [[ElectronicSeries.electronicSeries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicSeries: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ElectronicSeries', this, 'Edm.Int32');
  /**
   * Representation of the [[ElectronicSeries.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[ElectronicSeries.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ElectronicSeries.initialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  initialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InitialNumber', this, 'Edm.String');
  /**
   * Representation of the [[ElectronicSeries.nextNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NextNumber', this, 'Edm.String');
  /**
   * Representation of the [[ElectronicSeries.lastNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LastNumber', this, 'Edm.String');
  /**
   * Representation of the [[ElectronicSeries.prefix]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Prefix', this, 'Edm.String');
  /**
   * Representation of the [[ElectronicSeries.approvalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalYear: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalYear', this, 'Edm.Int32');
  /**
   * Representation of the [[ElectronicSeries.approvalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ElectronicSeries.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of ElectronicSeriesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ElectronicSeries);
  }
}

export namespace ElectronicSeries {
  /**
   * Metadata information on all properties of the `ElectronicSeries` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ElectronicSeries>[] = [{
    originalName: 'ElectronicSeries',
    name: 'electronicSeries',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InitialNumber',
    name: 'initialNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NextNumber',
    name: 'nextNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LastNumber',
    name: 'lastNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Prefix',
    name: 'prefix',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ApprovalYear',
    name: 'approvalYear',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ApprovalNumber',
    name: 'approvalNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ElectronicSeries {
    return deserializeComplexTypeV4(json, ElectronicSeries);
  }
}
