import * as React from "react";

interface IDialogFTextProps {
  isShowDialogText: boolean;
}

class DialogFText extends React.Component<IDialogFTextProps> {
  constructor(props: IDialogFTextProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className={`dialogF-text ${this.props.isShowDialogText ? "show" : ""}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 152.217 105.309"
      >
        <g>
          <path
            fill="#2D4670"
            d="M37.184,31.016h6.221v1.421H31.881v3.646c-0.012,4.024-0.909,6.934-2.692,8.729
			c-0.356-0.424-0.72-0.773-1.087-1.053c-0.022-0.012-0.039-0.023-0.051-0.033c1.082-1.115,1.778-2.615,2.091-4.5
			c-0.2,0.124-0.892,0.525-2.074,1.204l-0.519-1.471c0.279-0.112,1.21-0.558,2.793-1.338c0.023-0.736,0.034-1.254,0.034-1.555
			v-5.051h5.15v-1.94h1.657V31.016z M30.259,35.498l-1.255,0.669c-0.156-0.902-0.545-1.934-1.17-3.095
			c-0.021-0.055-0.045-0.1-0.067-0.133l1.171-0.568c0.625,1.037,1.055,2.039,1.287,3.01C30.237,35.425,30.248,35.463,30.259,35.498z
			 M38.671,39.445v3.51h4.733v1.406H31.63v-1.406h1.89v-5.618h1.473v5.618h2.156v-7.591h-4.298v-1.371H42.87v1.371h-4.198v2.709
			h3.946v1.372H38.671z"
          />
          <path
            fill="#2D4670"
            d="M60.479,35.581h-3.996c0.412,3.779,1.816,6.396,4.214,7.845c-0.423,0.277-0.813,0.701-1.171,1.27
			c-1.873-1.193-3.172-3.149-3.896-5.87c-0.68,2.509-2.08,4.51-4.197,6.004c-0.201-0.346-0.508-0.721-0.92-1.121v1.07h-1.488v-5.853
			h-1.506v0.417c-0.012,2.241-0.541,3.932-1.588,5.067c-0.324-0.254-0.726-0.506-1.205-0.75c0.904-0.982,1.354-2.426,1.354-4.333
			v-0.4h-1.204v-1.438h4.148v-2.157H46.18v-0.017h-0.652v-5.485h1.439v4.063h2.057v-4.8h1.488V43.51
			c2.185-1.596,3.489-3.804,3.914-6.625c0.055-0.412,0.1-0.847,0.133-1.305H51.08v-1.571h3.529v-0.117v-4.8h1.521v4.816v0.101h4.349
			V35.581z M60.196,32.588l-1.338,0.685c-0.414-0.893-1.044-1.855-1.891-2.893c-0.057-0.079-0.112-0.146-0.168-0.2l1.271-0.604
			c0.881,0.982,1.566,1.936,2.057,2.86C60.151,32.493,60.172,32.542,60.196,32.588z"
          />
          <path
            fill="#2D4670"
            d="M63.774,36.935c-0.525,0-0.908-0.233-1.154-0.701c-0.111-0.212-0.168-0.435-0.168-0.67
			c0-0.567,0.234-0.98,0.703-1.237c0.189-0.11,0.396-0.167,0.619-0.167c0.523,0,0.902,0.233,1.137,0.703
			c0.111,0.222,0.168,0.457,0.168,0.701c0,0.569-0.229,0.976-0.687,1.221C64.192,36.885,63.985,36.935,63.774,36.935z M63.774,43.66
			c-0.535,0-0.92-0.23-1.154-0.688c-0.111-0.211-0.168-0.439-0.168-0.685c0-0.569,0.234-0.981,0.703-1.237
			c0.189-0.111,0.396-0.167,0.619-0.167c0.523,0,0.902,0.234,1.137,0.701c0.111,0.225,0.168,0.458,0.168,0.703
			c0,0.58-0.24,0.994-0.72,1.238C64.18,43.613,63.985,43.66,63.774,43.66z"
          />
          <path
            fill="#2D4670"
            d="M31.748,55.896l-0.903,1.338c-0.747-0.578-1.729-1.113-2.943-1.604
			c-0.1-0.033-0.189-0.066-0.268-0.1l0.854-1.223c1.314,0.436,2.368,0.938,3.16,1.506C31.68,55.848,31.714,55.877,31.748,55.896z
			 M31.262,58.607l1.221,1.02c-0.891,1.861-1.873,3.691-2.943,5.486l-1.388-1.02C29.21,62.521,30.248,60.693,31.262,58.607z
			 M32.618,51.434l-0.903,1.32c-0.657-0.613-1.688-1.227-3.095-1.84c-0.022-0.01-0.039-0.018-0.049-0.018l0.852-1.17
			c1.295,0.479,2.325,1.021,3.095,1.621C32.551,51.381,32.584,51.41,32.618,51.434z M41.883,63.34h1.537v1.506H31.965V63.34h1.973
			V50.412h7.945V63.34z M40.277,51.918h-4.8v2.775h4.8V51.918z M40.277,58.975v-2.844h-4.8v2.844H40.277z M35.477,60.414v2.926h4.8
			v-2.926H35.477z"
          />
          <path
            fill="#2D4670"
            d="M58.171,59.092l1.071,0.818c-0.938,0.76-2.053,1.512-3.346,2.258
			c1.316,0.904,2.883,1.512,4.699,1.824c-0.367,0.322-0.697,0.787-0.987,1.389c-3.276-0.703-5.658-2.309-7.141-4.816
			c-0.268-0.459-0.513-0.947-0.735-1.473h-2.158v3.996c0.469-0.066,1.188-0.178,2.158-0.332c0.779-0.135,1.365-0.23,1.756-0.285
			l0.066,1.422c-3.021,0.547-5.559,0.975-7.609,1.287l-0.385-1.488c0.223-0.023,1.031-0.141,2.426-0.352v-4.248h-3.027v-1.42h6.906
			v-5.336h-6.305v-1.389h6.305v-1.338h1.556v1.338h6.405v1.389h-6.405v5.336h6.974v1.42H58.171z M46.514,53.156h4.449v3.645h-4.449
			V53.156z M49.743,55.848v-1.723h-2.074v1.723H49.743z M57.905,59.092h-4.6c0.4,0.838,0.92,1.572,1.555,2.209
			C56.176,60.475,57.19,59.738,57.905,59.092z M58.825,56.801h-4.482v-3.645h4.482V56.801z M55.512,54.125v1.723h2.09v-1.723H55.512
			z"
          />
          <path
            fill="#2D4670"
            d="M68.59,55.129c1.193,0.947,2.369,2.09,3.529,3.428c0.1,0.123,0.193,0.234,0.283,0.336l-1.455,1.254
			c-1.182-1.439-2.436-2.709-3.762-3.813L68.59,55.129z"
          />
          <path
            fill="#2D4670"
            d="M90.715,60.514l0.953,0.584c-0.646,0.904-1.549,1.658-2.709,2.258
			c1.649,0.379,3.579,0.615,5.787,0.705c-0.324,0.344-0.598,0.785-0.82,1.32c-2.664-0.18-4.967-0.58-6.906-1.205
			c-1.906,0.646-4.299,1.055-7.176,1.221c-0.1-0.445-0.289-0.869-0.568-1.27c2.229-0.08,4.182-0.313,5.854-0.703
			c-0.857-0.424-1.55-0.859-2.074-1.305c-0.746,0.391-1.566,0.736-2.458,1.037c-0.2-0.367-0.501-0.713-0.903-1.037
			c2.053-0.613,3.629-1.398,4.734-2.359c-0.336-0.176-0.502-0.563-0.502-1.152v-0.986h1.287v0.969c0,0.211,0.078,0.34,0.233,0.385
			c0.112,0.023,0.296,0.035,0.552,0.035h2.342c0.279,0,0.457-0.092,0.535-0.268c0.057-0.146,0.096-0.391,0.117-0.736
			c0.246,0.154,0.598,0.283,1.054,0.383c-0.067,0.771-0.279,1.244-0.636,1.424c-0.223,0.098-0.523,0.15-0.902,0.15h-2.426
			c-0.244,0.244-0.479,0.455-0.702,0.635h5.067L90.715,60.514z M81.065,57.186v1.59h-1.371v-2.576h2.174v-4.182h3.83
			c0.078-0.256,0.141-0.479,0.186-0.67h-6.189v-1.152h14.399v1.152h-6.505c-0.023,0.057-0.057,0.141-0.1,0.252
			c-0.079,0.201-0.141,0.34-0.186,0.418h4.75v4.182h2.191v2.576h-1.422v-1.59h-5.971c0.568,0.291,1.021,0.607,1.355,0.953
			l-0.869,0.652c-0.369-0.424-0.883-0.803-1.539-1.137c-0.057-0.023-0.102-0.045-0.135-0.066l0.568-0.402H81.065z M81.333,60.414
			l-0.969-0.838c0.936-0.389,1.66-1.041,2.174-1.955l1.07,0.535C82.983,59.227,82.225,59.979,81.333,60.414z M90.465,52.838h-7.074
			v0.617h7.074V52.838z M90.465,54.826v-0.617h-7.074v0.617H90.465z M83.391,55.58v0.619h7.074V55.58H83.391z M89.362,61.584h-4.969
			c0.58,0.424,1.467,0.848,2.66,1.271C88,62.498,88.77,62.074,89.362,61.584z M89.913,58.156l1.055-0.686
			c0.969,0.625,1.771,1.275,2.408,1.955c0.043,0.057,0.082,0.1,0.117,0.135l-1.088,0.77c-0.514-0.635-1.283-1.316-2.309-2.041
			C90.03,58.234,89.968,58.189,89.913,58.156z"
          />
          <path
            fill="#2D4670"
            d="M111.67,51.918h-1.689c0.591,0.803,1.26,1.449,2.008,1.939c0.021,0.01,0.039,0.023,0.049,0.033
			c-0.346,0.279-0.641,0.58-0.885,0.902c-0.525-0.434-1.077-1.07-1.656-1.904v2.49h-1.188v-2.307
			c-0.425,0.77-0.875,1.359-1.355,1.771c-0.156-0.246-0.368-0.484-0.636-0.719v1.121h-4.749v-1.924h0.937v1.021h0.87v-1.305h-2.175
			v-0.938h0.771c-0.18-0.166-0.418-0.322-0.721-0.469V51.9h-1.605v0.102c0.691,0.469,1.26,0.908,1.706,1.32
			c0.022,0.023,0.04,0.039,0.052,0.051l-0.77,0.953c-0.18-0.268-0.508-0.664-0.988-1.188v2.24h-1.17v-2.24
			c-0.613,0.869-1.209,1.504-1.789,1.906c-0.111-0.355-0.291-0.736-0.535-1.137c0.746-0.457,1.41-1.115,1.99-1.973
			c0.021-0.014,0.033-0.023,0.033-0.035h-1.656v-1.053h1.957v-1.221h1.17v1.221h1.605v0.619c0.469-0.537,0.809-1.148,1.021-1.84
			l1.02,0.148c-0.09,0.291-0.162,0.504-0.217,0.637h3.177v0.92h-1.722v0.77h2.056v0.938h-2.056v1.305h0.836v-1.021h0.952v0.486
			c0.591-0.447,1.104-1.078,1.54-1.891h-1.289v-1.055h1.74v-1.236h1.188v1.236h2.174V51.918z M96.702,58.523v-2.893h14.684v2.893
			h-1.42v-1.756h-8.881c0.277,0.156,0.512,0.324,0.701,0.502l-0.484,0.469c-0.268-0.246-0.557-0.463-0.869-0.654l0.4-0.316h-2.775
			v0.752h0.802v0.953l0.286-0.201c0.289,0.146,0.563,0.346,0.818,0.604l-0.502,0.385c-0.178-0.168-0.379-0.334-0.603-0.502v1.74
			h2.459c-0.179-0.18-0.368-0.34-0.567-0.486l0.518-0.352c0.367,0.258,0.624,0.48,0.77,0.67l-0.201,0.168h1.975v-1.557l-0.336,0.301
			c-0.245-0.232-0.535-0.457-0.869-0.67l0.469-0.383c0.322,0.189,0.567,0.35,0.736,0.484V57.52h1.136v3.914h-7.208v-2.91H96.702z
			 M100.013,64.227h2.96c0.336,0,0.547-0.084,0.636-0.25c0.056-0.135,0.101-0.375,0.134-0.721c0.301,0.18,0.67,0.303,1.104,0.369
			c-0.088,0.779-0.307,1.264-0.652,1.455c-0.244,0.133-0.607,0.201-1.086,0.201H99.93c-1.016,0-1.65-0.146-1.906-0.436
			c-0.189-0.223-0.285-0.58-0.285-1.07v-2.107h1.289v0.869c1.994-0.256,3.433-0.563,4.314-0.92l0.869,0.787
			c-1.203,0.455-2.932,0.801-5.184,1.035v0.318c0,0.234,0.088,0.373,0.268,0.418C99.428,64.209,99.667,64.227,100.013,64.227z
			 M102.405,57.168l0.736,0.252c-0.257,0.334-0.658,0.752-1.203,1.254c0.634,0.457,1.119,0.836,1.453,1.139l-0.602,0.5
			c-0.322-0.324-0.797-0.713-1.422-1.17c-0.602,0.48-1.188,0.887-1.756,1.221c-0.133-0.166-0.34-0.346-0.619-0.535
			c0.637-0.322,1.227-0.691,1.773-1.105c-0.691-0.455-1.137-0.74-1.338-0.852l0.552-0.434c0.257,0.143,0.708,0.418,1.354,0.818
			C101.77,57.9,102.126,57.537,102.405,57.168z M102.071,52.102h1.305v-0.77h-0.752C102.477,51.576,102.293,51.834,102.071,52.102z
			 M110.149,61.199l1.236,0.418c-1.025,1.705-2.949,2.943-5.77,3.713c-0.234-0.467-0.502-0.836-0.803-1.104
			c2.297-0.502,3.965-1.359,5.001-2.576C109.936,61.496,110.047,61.346,110.149,61.199z M108.526,57.035l1.121,0.502
			c-0.869,0.859-2.125,1.611-3.764,2.258c-0.156-0.223-0.451-0.523-0.885-0.902C106.614,58.346,107.79,57.727,108.526,57.035z
			 M109.262,59.092l1.188,0.451c-0.948,1.193-2.441,2.158-4.482,2.895c-0.212-0.346-0.491-0.682-0.836-1.004
			c1.605-0.49,2.87-1.158,3.797-2.008C109.051,59.314,109.163,59.203,109.262,59.092z"
          />
          <path
            fill="#2D4670"
            d="M118.528,57.502c0-0.857,0.34-1.555,1.019-2.088c0.491-0.393,1.044-0.588,1.657-0.588
			c0.879,0,1.588,0.346,2.123,1.037c0.367,0.492,0.553,1.037,0.553,1.639c0,0.871-0.346,1.574-1.037,2.107
			c-0.48,0.379-1.027,0.57-1.639,0.57c-0.86,0-1.557-0.342-2.092-1.02C118.721,58.68,118.528,58.127,118.528,57.502z
			 M119.563,57.502c0,0.594,0.258,1.055,0.77,1.391c0.279,0.166,0.568,0.25,0.871,0.25c0.602,0,1.063-0.258,1.387-0.77
			c0.168-0.268,0.252-0.559,0.252-0.871c0-0.602-0.258-1.063-0.771-1.387c-0.267-0.168-0.558-0.252-0.868-0.252
			c-0.58,0-1.037,0.246-1.373,0.738C119.653,56.879,119.563,57.18,119.563,57.502z"
          />
        </g>
      </svg>
    );
  }
}

export default DialogFText;