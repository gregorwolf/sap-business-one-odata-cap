/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SnbLines
 */
export interface SnbLines {
  /**
   * Snb Abs Entry.
   * @nullable
   */
  snbAbsEntry?: number;
  /**
   * New Cost.
   * @nullable
   */
  newCost?: number;
  /**
   * Debit Credit.
   * @nullable
   */
  debitCredit?: number;
  /**
   * System Number.
   * @nullable
   */
  systemNumber?: number;
  /**
   * Lot Number.
   * @nullable
   */
  lotNumber?: string;
  /**
   * Manufacture Number.
   * @nullable
   */
  manufactureNumber?: string;
  /**
   * Admission Date.
   * @nullable
   */
  admissionDate?: Moment;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: Moment;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SnbLines.build]] instead.
 */
export function createSnbLines(json: any): SnbLines {
  return SnbLines.build(json);
}

/**
 * SnbLinesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SnbLinesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SnbLines> {
  /**
   * Representation of the [[SnbLines.snbAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snbAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SnbAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[SnbLines.newCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NewCost', this, 'Edm.Double');
  /**
   * Representation of the [[SnbLines.debitCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitCredit', this, 'Edm.Double');
  /**
   * Representation of the [[SnbLines.systemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SnbLines.lotNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lotNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LotNumber', this, 'Edm.String');
  /**
   * Representation of the [[SnbLines.manufactureNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufactureNumber', this, 'Edm.String');
  /**
   * Representation of the [[SnbLines.admissionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  admissionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AdmissionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SnbLines.expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expirationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpirationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SnbLines.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');

  /**
   * Creates an instance of SnbLinesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SnbLines);
  }
}

export namespace SnbLines {
  /**
   * Metadata information on all properties of the `SnbLines` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SnbLines>[] = [{
    originalName: 'SnbAbsEntry',
    name: 'snbAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NewCost',
    name: 'newCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DebitCredit',
    name: 'debitCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemNumber',
    name: 'systemNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LotNumber',
    name: 'lotNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ManufactureNumber',
    name: 'manufactureNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdmissionDate',
    name: 'admissionDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ExpirationDate',
    name: 'expirationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SnbLines {
    return deserializeComplexTypeV4(json, SnbLines);
  }
}
