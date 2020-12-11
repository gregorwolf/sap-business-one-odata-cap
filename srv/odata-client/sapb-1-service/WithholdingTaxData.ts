/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoStatus } from './BoStatus';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WithholdingTaxData
 */
export interface WithholdingTaxData {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Wt Amount Sys.
   * @nullable
   */
  wtAmountSys?: number;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: number;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: number;
  /**
   * Withholding Type.
   * @nullable
   */
  withholdingType?: string;
  /**
   * Taxable Amountin Sys.
   * @nullable
   */
  taxableAmountinSys?: number;
  /**
   * Taxable Amount Fc.
   * @nullable
   */
  taxableAmountFc?: number;
  /**
   * Taxable Amount.
   * @nullable
   */
  taxableAmount?: number;
  /**
   * Rounding Type.
   * @nullable
   */
  roundingType?: string;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Criteria.
   * @nullable
   */
  criteria?: string;
  /**
   * Category.
   * @nullable
   */
  category?: string;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: string;
  /**
   * Applied Wt Amount Sys.
   * @nullable
   */
  appliedWtAmountSys?: number;
  /**
   * Applied Wt Amount Fc.
   * @nullable
   */
  appliedWtAmountFc?: number;
  /**
   * Applied Wt Amount.
   * @nullable
   */
  appliedWtAmount?: number;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: string;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Base Doc Entry.
   * @nullable
   */
  baseDocEntry?: number;
  /**
   * Base Doc Line.
   * @nullable
   */
  baseDocLine?: number;
  /**
   * Base Doc Type.
   * @nullable
   */
  baseDocType?: number;
  /**
   * Base Document Reference.
   * @nullable
   */
  baseDocumentReference?: number;
  /**
   * Status.
   * @nullable
   */
  status?: BoStatus;
  /**
   * Target Abs Entry.
   * @nullable
   */
  targetAbsEntry?: number;
  /**
   * Target Document Type.
   * @nullable
   */
  targetDocumentType?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxData.build]] instead.
 */
export function createWithholdingTaxData(json: any): WithholdingTaxData {
  return WithholdingTaxData.build(json);
}

/**
 * WithholdingTaxDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxData> {
  /**
   * Representation of the [[WithholdingTaxData.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.wtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.withholdingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.taxableAmountinSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountinSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.taxableAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.taxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.roundingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RoundingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.criteria]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  criteria: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Criteria', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Category', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.appliedWtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.appliedWtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.appliedWtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxData.glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccount', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxData.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.baseDocEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.baseDocLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.baseDocType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocType', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.baseDocumentReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentReference: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentReference', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[WithholdingTaxData.targetAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxData.targetDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetDocumentType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetDocumentType', this, 'Edm.Int32');

  /**
   * Creates an instance of WithholdingTaxDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxData);
  }
}

export namespace WithholdingTaxData {
  /**
   * Metadata information on all properties of the `WithholdingTaxData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxData>[] = [{
    originalName: 'WTCode',
    name: 'wtCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTAmountSys',
    name: 'wtAmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTAmountFC',
    name: 'wtAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTAmount',
    name: 'wtAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WithholdingType',
    name: 'withholdingType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxableAmountinSys',
    name: 'taxableAmountinSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxableAmountFC',
    name: 'taxableAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxableAmount',
    name: 'taxableAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RoundingType',
    name: 'roundingType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Criteria',
    name: 'criteria',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Category',
    name: 'category',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BaseType',
    name: 'baseType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AppliedWTAmountSys',
    name: 'appliedWtAmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedWTAmountFC',
    name: 'appliedWtAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedWTAmount',
    name: 'appliedWtAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GLAccount',
    name: 'glAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocEntry',
    name: 'baseDocEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocLine',
    name: 'baseDocLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocType',
    name: 'baseDocType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocumentReference',
    name: 'baseDocumentReference',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TargetAbsEntry',
    name: 'targetAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetDocumentType',
    name: 'targetDocumentType',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxData {
    return deserializeComplexTypeV4(json, WithholdingTaxData);
  }
}
