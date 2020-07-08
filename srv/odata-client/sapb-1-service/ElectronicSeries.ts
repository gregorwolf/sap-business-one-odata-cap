/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ElectronicSeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ElectronicSeries {
  export function build(json: { [keys: string]: FieldType }): ElectronicSeries {
    return createComplexType(json, {
      ElectronicSeries: (electronicSeries: number) => ({ electronicSeries: edmToTs(electronicSeries, 'Edm.Int32') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      InitialNumber: (initialNumber: string) => ({ initialNumber: edmToTs(initialNumber, 'Edm.String') }),
      NextNumber: (nextNumber: string) => ({ nextNumber: edmToTs(nextNumber, 'Edm.String') }),
      LastNumber: (lastNumber: string) => ({ lastNumber: edmToTs(lastNumber, 'Edm.String') }),
      Prefix: (prefix: string) => ({ prefix: edmToTs(prefix, 'Edm.String') }),
      ApprovalYear: (approvalYear: number) => ({ approvalYear: edmToTs(approvalYear, 'Edm.Int32') }),
      ApprovalNumber: (approvalNumber: number) => ({ approvalNumber: edmToTs(approvalNumber, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
