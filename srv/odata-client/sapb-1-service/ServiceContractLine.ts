/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceContractLine
 */
export interface ServiceContractLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Manufacturer Serial Num.
   * @nullable
   */
  manufacturerSerialNum?: string;
  /**
   * Internal Serial Num.
   * @nullable
   */
  internalSerialNum?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: string;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: number;
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
   * Item Group Name.
   * @nullable
   */
  itemGroupName?: string;
  /**
   * Termination Date.
   * @nullable
   */
  terminationDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceContractLine.build]] instead.
 */
export function createServiceContractLine(json: any): ServiceContractLine {
  return ServiceContractLine.build(json);
}

/**
 * ServiceContractLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceContractLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceContractLine> {
  /**
   * Representation of the [[ServiceContractLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceContractLine.manufacturerSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNum', this, 'Edm.String');
  /**
   * Representation of the [[ServiceContractLine.internalSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNum', this, 'Edm.String');
  /**
   * Representation of the [[ServiceContractLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ServiceContractLine.itemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceContractLine.itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemGroup', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceContractLine.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceContractLine.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceContractLine.itemGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemGroupName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceContractLine.terminationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  terminationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TerminationDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of ServiceContractLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceContractLine);
  }
}

export namespace ServiceContractLine {
  /**
   * Metadata information on all properties of the `ServiceContractLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceContractLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ManufacturerSerialNum',
    name: 'manufacturerSerialNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InternalSerialNum',
    name: 'internalSerialNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemName',
    name: 'itemName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemGroup',
    name: 'itemGroup',
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
    originalName: 'ItemGroupName',
    name: 'itemGroupName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TerminationDate',
    name: 'terminationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceContractLine {
    return deserializeComplexTypeV4(json, ServiceContractLine);
  }
}
