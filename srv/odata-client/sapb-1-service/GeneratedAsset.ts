/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * GeneratedAsset
 */
export interface GeneratedAsset {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Asset Code.
   * @nullable
   */
  assetCode?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Amount Sc.
   * @nullable
   */
  amountSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[GeneratedAsset.build]] instead.
 */
export function createGeneratedAsset(json: any): GeneratedAsset {
  return GeneratedAsset.build(json);
}

/**
 * GeneratedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GeneratedAssetField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GeneratedAsset.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.assetCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AssetCode', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.serialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('amount', this, 'Edm.Double');
  /**
   * Representation of the [[GeneratedAsset.amountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('amountSC', this, 'Edm.Double');
}

export namespace GeneratedAsset {
  export function build(json: { [keys: string]: FieldType }): GeneratedAsset {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      AssetCode: (assetCode: string) => ({ assetCode: edmToTs(assetCode, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      SerialNumber: (serialNumber: string) => ({ serialNumber: edmToTs(serialNumber, 'Edm.String') }),
      amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') }),
      amountSC: (amountSc: number) => ({ amountSc: edmToTs(amountSc, 'Edm.Double') })
    });
  }
}
