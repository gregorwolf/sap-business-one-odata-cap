/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocsInWtGroups, DocsInWtGroupsField } from './DocsInWtGroups';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtGroups
 */
export interface WtGroups {
  /**
   * Wt Abs Entry.
   * @nullable
   */
  wtAbsEntry?: number;
  /**
   * Percent.
   * @nullable
   */
  percent?: number;
  /**
   * Sum Vat Amount.
   * @nullable
   */
  sumVatAmount?: number;
  /**
   * Sum Doc Total.
   * @nullable
   */
  sumDocTotal?: number;
  /**
   * Sum Base Amount.
   * @nullable
   */
  sumBaseAmount?: number;
  /**
   * Sum Accum Amount.
   * @nullable
   */
  sumAccumAmount?: number;
  /**
   * Sum Percept Amount.
   * @nullable
   */
  sumPerceptAmount?: number;
  /**
   * Docs In Wt Groups Collection.
   * @nullable
   */
  docsInWtGroupsCollection?: DocsInWtGroups;
}

/**
 * @deprecated Since v1.6.0. Use [[WtGroups.build]] instead.
 */
export function createWtGroups(json: any): WtGroups {
  return WtGroups.build(json);
}

/**
 * WtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtGroupsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtGroups.wtAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WtGroups.percent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percent', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumVATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumDocTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumDocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumAccumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumAccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumPerceptAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPerceptAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPerceptAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.docsInWtGroupsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docsInWtGroupsCollection: DocsInWtGroupsField<EntityT> = new DocsInWtGroupsField('DocsInWTGroupsCollection', this);
}

export namespace WtGroups {
  export function build(json: { [keys: string]: FieldType | DocsInWtGroups }): WtGroups {
    return createComplexType(json, {
      WTAbsEntry: (wtAbsEntry: number) => ({ wtAbsEntry: edmToTs(wtAbsEntry, 'Edm.Int32') }),
      Percent: (percent: number) => ({ percent: edmToTs(percent, 'Edm.Double') }),
      SumVATAmount: (sumVatAmount: number) => ({ sumVatAmount: edmToTs(sumVatAmount, 'Edm.Double') }),
      SumDocTotal: (sumDocTotal: number) => ({ sumDocTotal: edmToTs(sumDocTotal, 'Edm.Double') }),
      SumBaseAmount: (sumBaseAmount: number) => ({ sumBaseAmount: edmToTs(sumBaseAmount, 'Edm.Double') }),
      SumAccumAmount: (sumAccumAmount: number) => ({ sumAccumAmount: edmToTs(sumAccumAmount, 'Edm.Double') }),
      SumPerceptAmount: (sumPerceptAmount: number) => ({ sumPerceptAmount: edmToTs(sumPerceptAmount, 'Edm.Double') }),
      DocsInWTGroupsCollection: (docsInWtGroupsCollection: DocsInWtGroups) => ({ docsInWtGroupsCollection: DocsInWtGroups.build(docsInWtGroupsCollection) })
    });
  }
}
