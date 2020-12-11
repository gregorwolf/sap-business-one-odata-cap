/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WithholdingTaxDataWtx
 */
export interface WithholdingTaxDataWtx {
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
   * Rate.
   * @nullable
   */
  rate?: number;
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
  baseDocType?: string;
  /**
   * Wt Abs Id.
   * @nullable
   */
  wtAbsId?: string;
  /**
   * Exempt Rate.
   * @nullable
   */
  exemptRate?: number;
  /**
   * Base Net Amount Sys.
   * @nullable
   */
  baseNetAmountSys?: number;
  /**
   * Base Net Amount Fc.
   * @nullable
   */
  baseNetAmountFc?: number;
  /**
   * Base Net Amount.
   * @nullable
   */
  baseNetAmount?: number;
  /**
   * Base Vatmount Sys.
   * @nullable
   */
  baseVatmountSys?: number;
  /**
   * Base Vatmount Fc.
   * @nullable
   */
  baseVatmountFc?: number;
  /**
   * Base Vatmount.
   * @nullable
   */
  baseVatmount?: number;
  /**
   * Accum Base Amount Sys.
   * @nullable
   */
  accumBaseAmountSys?: number;
  /**
   * Accum Base Amount Fc.
   * @nullable
   */
  accumBaseAmountFc?: number;
  /**
   * Accum Base Amount.
   * @nullable
   */
  accumBaseAmount?: number;
  /**
   * Accum W Tax Amount Sys.
   * @nullable
   */
  accumWTaxAmountSys?: number;
  /**
   * Accum W Tax Amount Fc.
   * @nullable
   */
  accumWTaxAmountFc?: number;
  /**
   * Accum W Tax Amount.
   * @nullable
   */
  accumWTaxAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxDataWtx.build]] instead.
 */
export function createWithholdingTaxDataWtx(json: any): WithholdingTaxDataWtx {
  return WithholdingTaxDataWtx.build(json);
}

/**
 * WithholdingTaxDataWtxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxDataWtxField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxDataWtx> {
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.withholdingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmountinSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountinSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Category', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccount', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseDocType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAbsId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTAbsId', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.exemptRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExemptRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmount', this, 'Edm.Double');

  /**
   * Creates an instance of WithholdingTaxDataWtxField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxDataWtx);
  }
}

export namespace WithholdingTaxDataWtx {
  /**
   * Metadata information on all properties of the `WithholdingTaxDataWtx` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxDataWtx>[] = [{
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
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
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
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTAbsId',
    name: 'wtAbsId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExemptRate',
    name: 'exemptRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseNetAmountSys',
    name: 'baseNetAmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseNetAmountFC',
    name: 'baseNetAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseNetAmount',
    name: 'baseNetAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseVatmountSys',
    name: 'baseVatmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseVatmountFC',
    name: 'baseVatmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseVatmount',
    name: 'baseVatmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumBaseAmountSys',
    name: 'accumBaseAmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumBaseAmountFC',
    name: 'accumBaseAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumBaseAmount',
    name: 'accumBaseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumWTaxAmountSys',
    name: 'accumWTaxAmountSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumWTaxAmountFC',
    name: 'accumWTaxAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumWTaxAmount',
    name: 'accumWTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxDataWtx {
    return deserializeComplexTypeV4(json, WithholdingTaxDataWtx);
  }
}
