/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WtdDetailType } from './WtdDetailType';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Wtdbp
 */
export interface Wtdbp {
  /**
   * Bp Key Part 1.
   * @nullable
   */
  bpKeyPart1?: string;
  /**
   * Bp Key Part 2.
   * @nullable
   */
  bpKeyPart2?: string;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: Moment;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Detail Type.
   * @nullable
   */
  detailType?: WtdDetailType;
}

/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
export function createWtdbp(json: any): Wtdbp {
  return Wtdbp.build(json);
}

/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdbpField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Wtdbp> {
  /**
   * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPKeyPart1', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPKeyPart2', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Wtdbp.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[Wtdbp.detailType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  detailType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DetailType', this);

  /**
   * Creates an instance of WtdbpField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Wtdbp);
  }
}

export namespace Wtdbp {
  /**
   * Metadata information on all properties of the `Wtdbp` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Wtdbp>[] = [{
    originalName: 'BPKeyPart1',
    name: 'bpKeyPart1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPKeyPart2',
    name: 'bpKeyPart2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTaxCode',
    name: 'wTaxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EffectiveDateFrom',
    name: 'effectiveDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EffectiveDateTo',
    name: 'effectiveDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DetailType',
    name: 'detailType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Wtdbp {
    return deserializeComplexTypeV4(json, Wtdbp);
  }
}
