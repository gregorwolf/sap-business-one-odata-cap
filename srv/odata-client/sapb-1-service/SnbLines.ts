/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class SnbLinesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace SnbLines {
  export function build(json: { [keys: string]: FieldType }): SnbLines {
    return createComplexType(json, {
      SnbAbsEntry: (snbAbsEntry: number) => ({ snbAbsEntry: edmToTs(snbAbsEntry, 'Edm.Int32') }),
      NewCost: (newCost: number) => ({ newCost: edmToTs(newCost, 'Edm.Double') }),
      DebitCredit: (debitCredit: number) => ({ debitCredit: edmToTs(debitCredit, 'Edm.Double') }),
      SystemNumber: (systemNumber: number) => ({ systemNumber: edmToTs(systemNumber, 'Edm.Int32') }),
      LotNumber: (lotNumber: string) => ({ lotNumber: edmToTs(lotNumber, 'Edm.String') }),
      ManufactureNumber: (manufactureNumber: string) => ({ manufactureNumber: edmToTs(manufactureNumber, 'Edm.String') }),
      AdmissionDate: (admissionDate: Moment) => ({ admissionDate: edmToTs(admissionDate, 'Edm.DateTimeOffset') }),
      ExpirationDate: (expirationDate: Moment) => ({ expirationDate: edmToTs(expirationDate, 'Edm.DateTimeOffset') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') })
    });
  }
}
