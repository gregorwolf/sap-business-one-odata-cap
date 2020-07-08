/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ServiceContractLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ServiceContractLine {
  export function build(json: { [keys: string]: FieldType }): ServiceContractLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ManufacturerSerialNum: (manufacturerSerialNum: string) => ({ manufacturerSerialNum: edmToTs(manufacturerSerialNum, 'Edm.String') }),
      InternalSerialNum: (internalSerialNum: string) => ({ internalSerialNum: edmToTs(internalSerialNum, 'Edm.String') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemName: (itemName: string) => ({ itemName: edmToTs(itemName, 'Edm.String') }),
      ItemGroup: (itemGroup: number) => ({ itemGroup: edmToTs(itemGroup, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      EndDate: (endDate: Moment) => ({ endDate: edmToTs(endDate, 'Edm.DateTimeOffset') }),
      ItemGroupName: (itemGroupName: string) => ({ itemGroupName: edmToTs(itemGroupName, 'Edm.String') }),
      TerminationDate: (terminationDate: Moment) => ({ terminationDate: edmToTs(terminationDate, 'Edm.DateTimeOffset') })
    });
  }
}
