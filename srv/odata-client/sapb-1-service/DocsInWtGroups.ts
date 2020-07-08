/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocsInWtGroups
 */
export interface DocsInWtGroups {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Obj Type.
   * @nullable
   */
  docObjType?: string;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: number;
  /**
   * Doc Total.
   * @nullable
   */
  docTotal?: number;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: number;
  /**
   * Accum Amount.
   * @nullable
   */
  accumAmount?: number;
  /**
   * Percept Amount.
   * @nullable
   */
  perceptAmount?: number;
  /**
   * Percent.
   * @nullable
   */
  percent?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocsInWtGroups.build]] instead.
 */
export function createDocsInWtGroups(json: any): DocsInWtGroups {
  return DocsInWtGroups.build(json);
}

/**
 * DocsInWtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocsInWtGroupsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocsInWtGroups.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocsInWtGroups.docObjType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docObjType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocObjType', this, 'Edm.String');
  /**
   * Representation of the [[DocsInWtGroups.vatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.accumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.perceptAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  perceptAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PerceptAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.percent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percent', this, 'Edm.Double');
}

export namespace DocsInWtGroups {
  export function build(json: { [keys: string]: FieldType }): DocsInWtGroups {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      DocObjType: (docObjType: string) => ({ docObjType: edmToTs(docObjType, 'Edm.String') }),
      VATAmount: (vatAmount: number) => ({ vatAmount: edmToTs(vatAmount, 'Edm.Double') }),
      DocTotal: (docTotal: number) => ({ docTotal: edmToTs(docTotal, 'Edm.Double') }),
      BaseAmount: (baseAmount: number) => ({ baseAmount: edmToTs(baseAmount, 'Edm.Double') }),
      AccumAmount: (accumAmount: number) => ({ accumAmount: edmToTs(accumAmount, 'Edm.Double') }),
      PerceptAmount: (perceptAmount: number) => ({ perceptAmount: edmToTs(perceptAmount, 'Edm.Double') }),
      Percent: (percent: number) => ({ percent: edmToTs(percent, 'Edm.Double') })
    });
  }
}
